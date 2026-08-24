import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetApiServiceImpl } from './services/PetApi.service';
import { StoreApiServiceImpl } from './services/StoreApi.service';
import { UserApiServiceImpl } from './services/UserApi.service';
// ⭐️↓追加
import { PetStoreModule } from './petstore.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // publicフォルダのパス指定
    }),
    PetStoreModule.forRoot({
      apiImplementations: {
        // DIの設定を行なっている。例：petApiの抽象クラスを使用する場面では、そのサブクラスPetApiServiceImplを呼び出すこと。
        petApi: PetApiServiceImpl,
        storeApi: StoreApiServiceImpl,
        userApi: UserApiServiceImpl,
      }
    }),
  ],
  // ⭐️↑追加、↓コメントアウト。
  //imports: [],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
