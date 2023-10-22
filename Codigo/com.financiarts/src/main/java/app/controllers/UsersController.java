package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.User;

public class UsersController extends CRUDBaseController<User> {

	private static UserDAO UserDAO = new UserDAO();

	public UsersController() {
		super("user");
	}

	@Override
	public String onGet(int id) {
		return UserDAO.get(id).toString();
	}

	@Override
	public void onInsert() {
		UserDAO.insert(new User());
	}
}
