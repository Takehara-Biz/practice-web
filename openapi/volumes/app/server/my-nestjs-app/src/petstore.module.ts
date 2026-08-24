import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ApiImplementations } from './generated/api-implementations'
import { PetApi } from './generated/api';
import { PetApiController } from './generated/controllers';
import { StoreApi } from './generated/api';
import { StoreApiController } from './generated/controllers';
import { UserApi } from './generated/api';
import { UserApiController } from './generated/controllers';
import { PetApiServiceImpl } from './services/PetApi.service';
import { StoreApiServiceImpl } from './services/StoreApi.service';
import { UserApiServiceImpl } from './services/UserApi.service';

export type ApiModuleConfiguration = {
  /**
  * your Api implementations
  */
  apiImplementations: ApiImplementations,
  /**
  * additional Providers that may be used by your implementations
  */
  providers?: Provider[],
}

@Module({})
export class PetStoreModule {
  static forRoot(configuration: ApiModuleConfiguration): DynamicModule {
      const providers: Provider[] = [
        {
          provide: PetApi,
          useClass: PetApiServiceImpl
        },
        {
          provide: StoreApi,
          useClass: StoreApiServiceImpl
        },
        {
          provide: UserApi,
          useClass: UserApiServiceImpl
        },
        ...(configuration.providers || []),
      ];

      return {
        module: PetStoreModule,
        controllers: [
          PetApiController,
          StoreApiController,
          UserApiController,
        ],
        providers: [...providers],
        exports: [...providers]
      }
    }
}