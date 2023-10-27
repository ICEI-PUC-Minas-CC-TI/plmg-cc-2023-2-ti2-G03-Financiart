package app.controllers;

import static spark.Spark.*;

import com.google.gson.Gson;

import dao.*;
import model.Entity;
import model.Investments;
import model.User;

import spark.Filter;
import spark.Request;
import spark.Response;


public abstract class CRUDBaseController<T extends Entity<T>> {
	
	String controller;
	BaseDAO basedao;
	
	public CRUDBaseController(String controller, BaseDAO basedao) {
		this.controller = controller;
		this.basedao = basedao;
		
	}
	
	public void AddController(){		
		//GET
		get("/"+controller+"/:id", (request, response) -> {
			return new Gson().toJson(basedao.get(Integer.parseInt(request.params(":id"))));
		});
		
		//DELETE
	    delete("/"+controller+"/:id", (request, response) -> {
	    	return basedao.delete(Integer.parseInt(request.params(":id")));
	    });
	}
}
