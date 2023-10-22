package dao;

import java.sql.*;

import service.QueryBuilder;

public class DAO {
	protected String table;
	protected Connection conexao;
	
	protected QueryBuilder getQueryBuilder() { return new QueryBuilder(table); }
	
	public DAO(String table) {
		conexao = null;
		this.table =table; 
	}
	
	public boolean conectar() {
		String driverName = "org.postgresql.Driver";                    
		String serverName = "financiart.postgres.database.azure.com";
		String mydatabase = "financiart";
		int porta = 5432;
		String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
		String username = "financiart@financiart";
		String password = "Fin142536";
		boolean status = false;
		

		try {
			Class.forName(driverName);
			conexao = DriverManager.getConnection(url, username, password);
			status = (conexao == null);
			System.out.println("Conexão efetuada com o postgres!");
		} catch (ClassNotFoundException e) { 
			System.err.println("Conexão NÃO efetuada com o postgres -- Driver não encontrado -- " + e.getMessage());
		} catch (SQLException e) {
			System.err.println("Conexão NÃO efetuada com o postgres -- " + e.getMessage());
		}

		return status;
	}
	
	public boolean close() {
		boolean status = false;
		
		try {
			conexao.close();
			status = true;
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return status;
	}
}