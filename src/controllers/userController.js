import * as userModel from '../models/userModel.js';

export const getAll = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

export const getById = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: 'Usuario no encontrado' });
};

export const create = async (req, res) => {
  const newUser = await userModel.createUser(req.body);
  res.status(201).json(newUser);
};

export const update = async (req, res) => {
  const updatedUser = await userModel.updateUser(req.params.id, req.body);
  res.json(updatedUser);
};

export const remove = async (req, res) => {
  const deletedUser = await userModel.deleteUser(req.params.id);
  res.json(deletedUser);
};