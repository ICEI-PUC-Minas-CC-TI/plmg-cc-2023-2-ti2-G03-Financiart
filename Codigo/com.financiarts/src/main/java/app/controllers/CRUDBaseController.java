package app.controllers;

import static spark.Spark.*;
import dao.*;
import model.Entity;
import model.Investments;
import model.User;

import spark.Filter;
import spark.Request;
import spark.Response;


public abstract class CRUDBaseController<T extends Entity<T>> {
	
	String controller;
	
	public CRUDBaseController(String controller) {
		this.controller = controller;
		
	}
	
	public void AddController(){
		
		
		//GET
		get("/"+controller+"/:id", (request, response) -> {
			return onGet(Integer.parseInt(request.params(":id")));
		});
		
		//INSERT
		post("/"+controller+"/insert", (request, response) -> {
			onInsert();
			return "OK";
		});
		
		//DELETE
	    delete("/"+controller, (request, response) -> {
	    	return null;
	    });
	    
	    //UPDATE
	    put("/"+controller, (request, response) -> { 
	    	return null; 
	    });
	}
	
	public abstract String onGet(int id);
	public abstract void onInsert();
}
