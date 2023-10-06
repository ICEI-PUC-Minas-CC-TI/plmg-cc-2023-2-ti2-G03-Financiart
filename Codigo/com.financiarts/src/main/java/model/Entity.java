package model;

import java.sql.ResultSet;
import java.util.ArrayList;

import org.javatuples.Pair;

public abstract class Entity<T> {
	
	int id;
	public int getId() { return id; }
	public void setId(int id) { this.id = id; }

	@SuppressWarnings("unchecked")
	public abstract Pair<String, String>[] InsertFields();
	
	@SuppressWarnings("unchecked")
	public abstract T FromResultSet(ResultSet rs) throws Throwable;
}
