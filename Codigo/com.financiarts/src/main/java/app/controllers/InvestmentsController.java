package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.Investments;
import model.InvestorProfile;
import model.User;

public class InvestmentsController extends CRUDBaseController<Investments> {

	private static InvestmentsDAO InvestmentsDAO = new InvestmentsDAO();
	
	public InvestmentsController() {
		super("investments");
	}

	@Override
	public String onGet(int id) {
		return InvestmentsDAO.get(id).toString();
	}

	@Override
	public void onInsert() {
		InvestmentsDAO.insert(new Investments());
	}
}
