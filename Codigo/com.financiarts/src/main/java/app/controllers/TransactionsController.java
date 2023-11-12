package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import dao.*;
import model.Investment;
import model.InvestorProfile;
import model.Transaction;
import model.User;

public class TransactionsController extends CRUDBaseController<Transaction> {

	private static TransactionDAO TransactionDAO = new TransactionDAO();

	public TransactionsController() {
		super("transaction", TransactionDAO);
		
		get("/"+controller+"/byuser/:id", (request, response) -> {
			Gson gson = new GsonBuilder()
					   .setDateFormat("yyyy-MM-dd").create();
			return  gson.toJson(TransactionDAO.ByUser(Integer.parseInt(request.params(":id"))));
		});
		
		post("/"+controller, (request, response) -> {
			Gson gson = new GsonBuilder()
					   .setDateFormat("yyyy-MM-dd").create();
			var investment = gson.fromJson(request.body(), Transaction.class);
			return TransactionDAO.insert(investment);
		});
	}
}
