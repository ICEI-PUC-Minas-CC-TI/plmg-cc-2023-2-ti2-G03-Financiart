package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.User;

public class UsersController {

	private static UserDAO UserDAO = new UserDAO();
	
	public static void AddControlers() {  
		get("/user/insert", (request, response) -> UserDAO.insert(new User()));
		
	    get("/user/:id", (request, response) -> UserDAO.get(Integer.parseInt(request.params(":id")))); 
	}
}
