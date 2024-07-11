package br.com.nightpatrol.model;

public class Client {
    private String firstName;
    private Integer age;
    private String City;
    private String rua;
    private Integer numberHouse;
    private Integer cep;
    private boolean typePlan;

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public Integer getNumberHouse() {
        return numberHouse;
    }

    public void setNumberHouse(Integer numberHouse) {
        this.numberHouse = numberHouse;
    }

    public Integer getCep() {
        return cep;
    }

    public void setCep(Integer cep) {
        this.cep = cep;
    }

    public boolean isTypePlan() {
        return typePlan;
    }

    public void setTypePlan(boolean typePlan) {
        this.typePlan = typePlan;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }
}
