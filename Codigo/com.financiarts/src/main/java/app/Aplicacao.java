package app;

import static spark.Spark.*;
import dao.*;
import model.User;

public class Aplicacao {

	private static UserDAO UserDAO = new UserDAO();
	
    public static void main(String[] args) {
        port(6789);
        
        staticFiles.location("/public");
        
        get("/user/insert", (request, response) -> UserDAO.insert(new User()));
        get("/user/:id", (request, response) -> UserDAO.get(Integer.parseInt(request.params(":id"))));
            
    }
}