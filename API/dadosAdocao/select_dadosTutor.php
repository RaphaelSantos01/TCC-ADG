<?php
include '../corss.php';
include '../conexao.php';


try{
    $sql = "SELECT * FROM `SolicitacaoAdocao`";

    $stmt = $connection->prepare($sql);
    $stmt->execute();

    if($stmt->rowCount() > 0){
        $tutores = [];

        $tutores = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode([
                'success' => 1,
                'message' => $tutores,
            ]);
            exit;

        }else{
    
        echo json_encode([
            'success' => 0,
            'message' => 'Há algum problema na exibição de dados'
        ]);
    }
}   catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => 0,
            'message' => $e->getMessage()
        ]);
        exit;
    }
?>