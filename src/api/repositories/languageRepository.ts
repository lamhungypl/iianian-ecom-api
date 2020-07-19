import { EntityRepository, Repository } from "typeorm";

import { Language } from "../models/language";

@EntityRepository(Language)
export class LanguageRepository extends Repository<Language> {}
