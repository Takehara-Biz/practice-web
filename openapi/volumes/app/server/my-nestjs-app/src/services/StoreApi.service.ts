import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StoreApi } from 'src/generated/api';
import { Order } from 'src/generated/models';

@Injectable()
export class StoreApiServiceImpl extends StoreApi {
  deleteOrder(orderId: number, request: Request): void | Promise<void> | Observable<void> {
    throw new Error('Method not implemented.');
  }
  getInventory(request: Request): { [key: string]: number; } | Promise<{ [key: string]: number; }> | Observable<{ [key: string]: number; }> {
    throw new Error('Method not implemented.');
  }
  getOrderById(orderId: number, request: Request): Order | Promise<Order> | Observable<Order> {
    throw new Error('Method not implemented.');
  }
  placeOrder(order: Order | undefined, request: Request): Order | Promise<Order> | Observable<Order> {
    throw new Error('Method not implemented.');
  }

} 