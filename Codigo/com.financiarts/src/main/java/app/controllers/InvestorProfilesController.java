package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.InvestorProfile;

public class InvestorProfilesController {

	private static InvestorProfileDAO InvestorProfileDAO = new InvestorProfileDAO();
	
	public static void AddControlers() { 
		get("/investorProfile/insert", (request, response) -> InvestorProfileDAO.insert(new InvestorProfile()));
		
        get("/investorProfile/:id", (request, response) -> InvestorProfileDAO.get(Integer.parseInt(request.params(":id"))));    
	}
}
