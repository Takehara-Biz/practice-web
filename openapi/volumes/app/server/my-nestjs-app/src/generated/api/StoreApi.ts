import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Order,  } from '../models';


@Injectable()
export abstract class StoreApi {

  abstract deleteOrder(orderId: number,  request: Request): void | Promise<void> | Observable<void>;


  abstract getInventory( request: Request): { [key: string]: number; } | Promise<{ [key: string]: number; }> | Observable<{ [key: string]: number; }>;


  abstract getOrderById(orderId: number,  request: Request): Order | Promise<Order> | Observable<Order>;


  abstract placeOrder(order: Order | undefined,  request: Request): Order | Promise<Order> | Observable<Order>;

} 