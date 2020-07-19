import { EntityRepository, Repository } from "typeorm";
import { OrderStatus } from "../models/orderStatus";

@EntityRepository(OrderStatus)
export class OrderStatusRepository extends Repository<OrderStatus> {}
