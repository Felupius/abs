    SELECT Clientes.ClienteNome, Contas.ContaNumero,
    Movimentos.MovimentoValor
    FROM Clientes, Contas, Movimentos
    WHERE Clientes.ClienteCodigo = Contas.ClienteCodigo
        AND Contas.ContaNumero = Movimentos.ContaNumero