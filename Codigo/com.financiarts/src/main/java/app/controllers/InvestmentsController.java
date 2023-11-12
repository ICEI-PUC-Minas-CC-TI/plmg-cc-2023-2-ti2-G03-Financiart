package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Investment;
import model.InvestorProfile;
import model.User;

public class InvestmentsController extends CRUDBaseController<Investment> {

	private static InvestmentsDAO InvestmentsDAO = new InvestmentsDAO();
	private static UserInvestmentsDAO UserInvestmentsDAO= new UserInvestmentsDAO();
	
	public InvestmentsController() {
		super("investments", InvestmentsDAO);
		
		get("/"+controller, (request, response) -> {
			return new Gson().toJson(InvestmentsDAO.all());
		});
		
		get("/"+controller+"/byuser/:id", (request, response) -> {
			return  new Gson().toJson(UserInvestmentsDAO.byUser(Integer.parseInt(request.params(":id"))));
		});
		
		post("/"+controller+"/byuser/:id", (request, response) -> {
			var investment = new Gson().fromJson(request.body(), Investment.class);
			return InvestmentsDAO.insert(investment);
		});
	}
}
