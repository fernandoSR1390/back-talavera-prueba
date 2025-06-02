import pool from '../db/db.js';

export const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM abm_users.users ORDER BY id ASC');
  return res.rows;
};

export const getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM abm_users.users WHERE id = $1', [id]);
  return res.rows[0];
};

export const createUser = async (user) => {
  const { name, birth_date, profession, nationality, phone, email, salary } = user;
  const res = await pool.query(
    `INSERT INTO abm_users.users (name, birth_date, profession, nationality, phone, email, salary)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [name, birth_date, profession, nationality, phone, email, salary]
  );
  return res.rows[0];
};

export const updateUser = async (id, user) => {
  const { name, birth_date, profession, nationality, phone, email, salary } = user;
  const res = await pool.query(
    `UPDATE abm_users.users SET name=$1, birth_date=$2, profession=$3, nationality=$4,
     phone=$5, email=$6, salary=$7 WHERE id=$8 RETURNING *`,
    [name, birth_date, profession, nationality, phone, email, salary, id]
  );
  return res.rows[0];
};

export const deleteUser = async (id) => {
  const res = await pool.query('DELETE FROM abm_users.users WHERE id=$1 RETURNING *', [id]);
  return res.rows[0];
};