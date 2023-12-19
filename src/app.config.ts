import { DataSource } from "typeorm";
import { personaDB } from "./models/persona";
import { UsuarioDB } from "./models/usuario";
import { CargoDB } from "./models/cargo";
import { AsistenciaDB } from "./models/asistencia";
import { ControlAsistenciaGeneralDB } from "./models/controlAsistencia";
import { EmpresaDb } from "./models/empresa";
import { FaltasDB } from "./models/faltas";
import { TardanzaDB } from "./models/tardanza";
import { TurnoDB } from "./models/turno";
import { HorarioDB } from "./models/horarios";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [personaDB, UsuarioDB, CargoDB, TardanzaDB, AsistenciaDB, FaltasDB, ControlAsistenciaGeneralDB, EmpresaDb, TurnoDB, HorarioDB],
    subscribers: [],
    migrations: [],
})