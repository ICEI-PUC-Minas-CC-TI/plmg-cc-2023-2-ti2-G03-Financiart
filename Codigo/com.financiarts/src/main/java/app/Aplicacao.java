package app;

import static spark.Spark.*;

import app.controllers.InvestmentsController;
import app.controllers.InvestorProfilesController;
import app.controllers.UsersController;

public class Aplicacao {
	
    public static void main(String[] args) {
        port(6789);
        
        staticFiles.location("/public");

        InvestorProfilesController.AddControlers();
        
        UsersController.AddControlers();
        
        InvestmentsController.AddControlers();
            
    }
}