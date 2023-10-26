package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Investments;
import model.InvestorProfile;
import model.User;

public class InvestorProfilesController extends CRUDBaseController<InvestorProfile>{

	private static InvestorProfileDAO InvestorProfileDAO = new InvestorProfileDAO();
	
	public InvestorProfilesController() {
		super("investorProfile");
		
		get("/"+controller+"/byuser/:id", (request, response) -> {
			return new Gson().toJson(InvestorProfileDAO.ByUser(Integer.parseInt(request.params(":id"))));
		});
		
		post("/"+controller+"/byuser/:id", (request, response) -> {
			var investment = new Gson().fromJson(request.body(), InvestorProfile.class);
			return InvestorProfileDAO.insert(investment);
		});
	}

	@Override
	public String onGet(int id) {
		return InvestorProfileDAO.get(id).toString();
	}

	@Override
	public void onInsert() {
		InvestorProfileDAO.insert(new InvestorProfile());
	}
}
