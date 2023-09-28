package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.Investments;
import model.User;

public class InvestmentsController {

	private static InvestmentsDAO InvestmentsDAO = new InvestmentsDAO();
	
	public static void AddControlers() {  
		get("/investments/insert", (request, response) -> InvestmentsDAO.insert(new Investments()));
		
	    get("/investments/:id", (request, response) -> InvestmentsDAO.get(Integer.parseInt(request.params(":id")))); 
	}
}
