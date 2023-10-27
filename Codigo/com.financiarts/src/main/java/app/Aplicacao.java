package app;

import static spark.Spark.*;

import app.controllers.InvestmentsController;
import app.controllers.InvestorProfilesController;
import app.controllers.UsersController;
import dao.InvestorProfileDAO;

public class Aplicacao {
	
    public static void main(String[] args) {
        port(6789);
        
        staticFiles.location("/public");

		options("/*", (req, res) -> {
			String accessControlRequestHeaders = req.headers("Access-Control-Request-Headers");
			if (accessControlRequestHeaders != null) {
				res.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
			}

			String accessControlRequestMethod = req.headers("Access-Control-Request-Method");
			if (accessControlRequestMethod != null) {
				res.header("Access-Control-Allow-Methods", accessControlRequestMethod);
			}

	        return "OK";
		});

		before((req, res) -> {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "*");
			res.type("application/json");
		});

        new InvestorProfilesController();
        new UsersController().AddController();
        new InvestmentsController().AddController();    
    }
}