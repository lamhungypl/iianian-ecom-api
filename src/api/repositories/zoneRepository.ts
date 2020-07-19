import { EntityRepository, Repository } from "typeorm";
import { Zone } from "../models/zone";

@EntityRepository(Zone)
export class ZoneRepository extends Repository<Zone> {}
