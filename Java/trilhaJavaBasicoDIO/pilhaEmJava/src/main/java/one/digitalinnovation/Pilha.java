package one.digitalinnovation;

public class Pilha {

    private No refNoEntradaPilha;

    public Pilha() {
        this.refNoEntradaPilha = null;
    }

    public No top() {
       return refNoEntradaPilha;
    }

    public void push(No novoNo){
        No refAuxiliar =refNoEntradaPilha;
        refNoEntradaPilha = novoNo;
        refNoEntradaPilha.setRefNo(refAuxiliar);
    }

    public No pop(){
        if(!this.isEmpty()) {
            No noPoped = refNoEntradaPilha;
            refNoEntradaPilha = refNoEntradaPilha.getRefNo();
            return noPoped;
        }
        return null;
    }

    public boolean isEmpty(){
        return refNoEntradaPilha == null ? true : false;
    }
}
