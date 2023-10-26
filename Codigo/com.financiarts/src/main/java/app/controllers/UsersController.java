package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.User;

public class UsersController extends CRUDBaseController<User> {

	private static UserDAO UserDAO = new UserDAO();

	public UsersController() {
		super("user", UserDAO);
	}
}
