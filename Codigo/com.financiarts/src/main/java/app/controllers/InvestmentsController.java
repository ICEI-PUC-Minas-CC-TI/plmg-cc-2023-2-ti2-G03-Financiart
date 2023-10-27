package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Investments;
import model.InvestorProfile;
import model.User;

public class InvestmentsController extends CRUDBaseController<Investments> {

	private static InvestmentsDAO InvestmentsDAO = new InvestmentsDAO();
	
	public InvestmentsController() {
		super("investments", InvestmentsDAO);
		
		get("/"+controller+"/byuser/:id", (request, response) -> {
			return new Gson().toJson(InvestmentsDAO.ByUser(Integer.parseInt(request.params(":id"))));
		});
		
		post("/"+controller+"/byuser/:id", (request, response) -> {
			var investment = new Gson().fromJson(request.body(), Investments.class);
			return InvestmentsDAO.insert(investment);
		});
	}
}
