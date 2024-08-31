<div align="center">
<img src="" width="480" />
</div>

<h1 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="40" height="40" /> Champions League API <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" alt="Party Popper" width="40" height="40" /></h1>

<p align="center" >
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=express,nodejs" height="25"/>
  </a>
</p>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="Memo" width="30" height="30" /> Descrição

Este repositório contém uma API desenvolvida em Node.js utilizando Express, que permite gerenciar informações de jogadores e clubes participantes da UEFA Champions League. A API suporta operações CRUD para jogadores e permite a consulta de clubes.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Books.png" alt="Books" width="30" height="30" /> Funcionalidades

A API oferece as seguintes funcionalidades:

### Jogadores (Players)
- **GET /players**: Retorna a lista de todos os jogadores.
- **POST /players**: Adiciona um novo jogador.
- **DELETE /players/:id**: Remove um jogador pelo ID.
- **GET /players/:id**: Retorna informações detalhadas de um jogador específico pelo ID.
- **PATCH /players/:id**: Atualiza informações de um jogador específico pelo ID.

### Clubes (Clubs)
- **GET /clubs**: Retorna a lista de todos os clubes participantes da Champions League.

## Estrutura de Dados

### Jogador (Player)

```json
{
  "id": 1,
  "name": "Karim Benzema",
  "club": "Real Madrid",
  "nationality": "French",
  "position": "Forward",
  "statistics": {
    "overall": 89,
    "pace": 77,
    "shooting": 88,
    "passing": 83,
    "dribbling": 85,
    "defending": 35,
    "physical": 81
  }
}
```

### Clube (Club)

```json
{
  "id": 1,
  "name": "Manchester United",
  "country": "England"
}
```

## Rotas da API

### 1. Jogadores

- **GET /players**
  - Descrição: Retorna todos os jogadores cadastrados na base de dados.
  - Resposta: Um array de objetos representando jogadores.

- **POST /players**
  - Descrição: Cria um novo jogador.
  - Corpo da Requisição:
    ```json
    {
      "name": "Nome do Jogador",
      "club": "Nome do Clube",
      "nationality": "Nacionalidade",
      "position": "Posição",
      "statistics": {
        "overall": 0,
        "pace": 0,
        "shooting": 0,
        "passing": 0,
        "dribbling": 0,
        "defending": 0,
        "physical": 0
      }
    }
    ```
  - Resposta: O objeto do jogador criado, incluindo o ID gerado.

- **DELETE /players/:id**
  - Descrição: Remove um jogador com base no ID fornecido.
  - Parâmetro: `id` - ID do jogador.
  - Resposta: Status de sucesso ou erro.

- **GET /players/:id**
  - Descrição: Retorna detalhes de um jogador específico.
  - Parâmetro: `id` - ID do jogador.
  - Resposta: Um objeto representando o jogador.

- **PATCH /players/:id**
  - Descrição: Atualiza informações de um jogador específico.
  - Parâmetro: `id` - ID do jogador.
  - Corpo da Requisição: Qualquer campo que você deseja atualizar no jogador.
  - Resposta: O objeto do jogador atualizado.

### 2. Clubes

- **GET /clubs**
  - Descrição: Retorna todos os clubes cadastrados na base de dados.
  - Resposta: Um array de objetos representando clubes.


## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="30" height="30" /> Rodando o projeto

### Pré-requisitos

- Node.js instalado na máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/champions-league-api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd champions-league-api
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Servidor

```bash
npm start
```


## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Done.png" alt="Hourglass Done" width="30" height="30" /> Status do projeto

✅ **Concluído**: O projeto foi finalizado e todas as funcionalidades planejadas foram implementadas.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png" alt="Eyes" width="30" height="30" /> Licença

Este projeto é licenciado sobre a licença [MIT License](https://opensource.org/licenses/MIT) - veja [LICENSE](LICENSE) para mais informações.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Folded%20Hands%20Medium-Light%20Skin%20Tone.png" alt="Folded Hands Medium-Light Skin Tone" width="30" height="30" /> Colaboradores

[@andrefods1993](https://github.com/andrefods1993)

<span style="font-size: 10px;"> [ReadME Wizard](https://github.com/andrefods1993) </span>