package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.InvestorProfile;
import model.User;

public class InvestorProfilesController extends CRUDBaseController<InvestorProfile>{

	private static InvestorProfileDAO InvestorProfileDAO = new InvestorProfileDAO();
	
	public InvestorProfilesController() {
		super("investorProfile");
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
