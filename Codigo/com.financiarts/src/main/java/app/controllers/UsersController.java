package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Investment;
import model.InvestorProfile;
import model.User;

public class UsersController extends CRUDBaseController<User> {

	private static UserDAO UserDAO = new UserDAO();

	public UsersController() {
		super("user", UserDAO);
		
		
		post("/"+controller+"/login", (request, response) -> {
			var user = new Gson().fromJson(request.body(), User.class);
			return new Gson().toJson(UserDAO.login(user.getEmail(), user.getPassword()));
		});
		
	}
}
