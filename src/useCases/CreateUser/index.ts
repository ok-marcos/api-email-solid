import { MailtrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepositpory } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepositpory = new PostgresUsersRepositpory();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepositpory,
  mailtrapMailProvider,
)
const createUserController = new CreateUserController(
  createUserUseCase,
)

export {createUserController, createUserUseCase}