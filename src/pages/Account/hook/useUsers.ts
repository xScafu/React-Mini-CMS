import { useEffect, useState } from "react";
import type { User } from "../../../core/Types";
import { getUsers } from "../../../core/ServerService";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data as User[]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
}
