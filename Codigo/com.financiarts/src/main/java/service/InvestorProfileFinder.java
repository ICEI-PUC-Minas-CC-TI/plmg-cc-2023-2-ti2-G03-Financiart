package service;

import java.util.ArrayList;
import java.util.List;

import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatFunction;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.service.FunctionExecutor;
import com.theokanning.openai.service.OpenAiService;

public class InvestorProfileFinder {

	String GPTKey = "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";
	OpenAiService Service = new OpenAiService(GPTKey);
	
	public String Find(String aboutMe) {
		return GetResponse(GetMessages(GetQuestion(aboutMe)));
	}
	
	String GetResponse(List<ChatMessage> messages) {
		ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest
		        .builder()
		        .model("gpt-3.5-turbo-1106")
		        .messages(messages)
		        .maxTokens(256)
		        .build();
		
		ChatMessage responseMessage = Service.createChatCompletion(chatCompletionRequest).getChoices().get(0).getMessage();
		return responseMessage.getContent();
	}
	
	List<ChatMessage> GetMessages(String question){
		List<ChatMessage> messages = new ArrayList<>();
		ChatMessage userMessage = new ChatMessage(ChatMessageRole.USER.value(), question);
		messages.add(userMessage);
		return messages;
	}
	
	String GetQuestion(String aboutMe) {
		var question = new StringBuilder();
		question.append("Dentre as opções abaixo, qual perfil de investimento eu me encaixo, sendo que:");
		question.append(aboutMe+"?");
		AddConditions(question);
		question.append("Só me diga a opção");
		return question.toString(); 
	}
	
	StringBuilder AddConditions(StringBuilder stringBuilder) {
		stringBuilder.append("Conservador");
		stringBuilder.append("Moderado");
		stringBuilder.append("Alto Risco");
		return stringBuilder;
	}
}








