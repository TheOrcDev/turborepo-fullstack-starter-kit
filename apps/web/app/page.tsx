import styles from "./page.module.css";
import { getUsers } from "../server/users";
import { User } from "@repo/types";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className={styles.page}>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
