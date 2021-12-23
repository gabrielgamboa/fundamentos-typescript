import createConnection from "../index";
import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function create() {
    const connection = await createConnection();

    const id = uuidv4();
    const password = await hash("admin", 8);

    await connection.query(`
        INSERT INTO USERS (id,name,email,password, "isAdmin", created_at, driver_license)
        VALUES ('${id}', 'admin', 'admin@rentx.com.br','${password}', true, 'now()', 'XXXXXXX')
    `);

    await connection.close;
}

create().then(() => console.log("User admin is created"));