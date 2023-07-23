package ExerciciosPOO.Exercicio12;

public class Filme {
    private String titulo;
    private String diretor;
    private int ano;

    public Filme(String titulo, String diretor, int ano) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.ano = ano;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }
}