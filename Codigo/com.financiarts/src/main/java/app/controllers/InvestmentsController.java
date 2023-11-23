package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Investment;
import model.InvestorProfile;
import model.User;
import model.UserInvestments;

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
		
		post("/"+controller+"/byuser/:id/:investmentName/:quantity", (request, response) -> {
			var investmentID = 0;
			var investments = InvestmentsDAO.all();
			var investmentName = request.params(":investmentName");
			
			for(var inv : investments) {
				if(inv.getName().equals(investmentName)) {					
					investmentID = inv.getId();
					break;
				}
			}
			var user = Integer.parseInt(request.params(":id"));
			var quantity = Integer.parseInt(request.params(":quantity"));
			if(investmentID == 0)
				throw new Exception();
			return UserInvestmentsDAO.insertNew(user, investmentID, quantity);
		});
		
		delete("/"+controller+"/byuser/:id", (request, response) -> {
			return UserInvestmentsDAO.delete(Integer.parseInt(request.params(":id")));
		});
	}
}
