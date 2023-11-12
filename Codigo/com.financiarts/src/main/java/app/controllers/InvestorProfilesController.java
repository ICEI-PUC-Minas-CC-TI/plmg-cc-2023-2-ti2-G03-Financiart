package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Investment;
import model.InvestorProfile;
import model.User;
import service.InvestorProfileFinder;

public class InvestorProfilesController extends CRUDBaseController<InvestorProfile>{

	private static InvestorProfileDAO InvestorProfileDAO = new InvestorProfileDAO();
	
	public InvestorProfilesController() {
		super("investorProfile", InvestorProfileDAO);
		
		get("/"+controller+"/byuser/:id", (request, response) -> {
			return new Gson().toJson(InvestorProfileDAO.ByUser(Integer.parseInt(request.params(":id"))));
		});
		
		post("/"+controller+"/byuser/:id", (request, response) -> {
			var investment = new Gson().fromJson(request.body(), InvestorProfile.class);
			return InvestorProfileDAO.insert(investment);
		});
		
		post("/"+controller+"/find", (request, response) -> {
			var body = request.body();
			return new Gson().toJson(new InvestorProfileFinder().Find(body));
		});
	}
}
