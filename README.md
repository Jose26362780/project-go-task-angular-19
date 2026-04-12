# ✅ Go Task | Angular 19 

Projeto desenvolvido durante a formação Angular da `Rocketseat`.

O Projeto seria uma Aplicação web de tarefas em estilo kanban para criar, editar, comentar e mover cards entre colunas (To Do, Doing, Done). Focada em simplicidade, persistencia local e fluxo intuitivo de tarefas. Usa Angular 19 com componentes standalone, CDK Drag and Drop e armazenamento via `localStorage`.

Durante o desenvolvimento, foco em:
- Arquitetura moderna Angular (Standalone components).
- Persistencia simples via `localStorage` (sem backend).
- Fluxo Kanban com drag and drop.
- Modais para criacao, edicao e comentarios.
- Separacao clara entre componentes e servicos.

![preview](.github/cover.png)

---

## 🚀 Tecnologias Utilizadas

Este projeto utiliza tecnologias simples e performaticas do ecossistema web:

![Angular](https://img.shields.io/badge/Angular-DB0535?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-000000?style=for-the-badge&logo=reactivex&logoColor=E7008A)
![Angular_CDK](https://img.shields.io/badge/Angular_CDK-20232A?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 📂 Estrutura do Projeto

```bash
.
├── src/
│  ├── app/
│  │  ├── app.component.*            # Componente raiz
│  │  ├── app.routes.ts              # Definicao de rotas
│  │  ├── components/
│  │  │  ├── header/
│  │  │  ├── main-content/
│  │  │  ├── task-card/
│  │  │  ├── task-comments-modal/
│  │  │  ├── task-form-modal/
│  │  │  ├── task-list-section/
│  │  │  └── welcome-section/
│  │  ├── services/
│  │  │  ├── modal-controller.service.ts
│  │  │  └── task.service.ts
│  │  ├── interfaces/
│  │  ├── enums/
│  │  ├── types/
│  │  └── utils/
│  ├── styles.css                    # Estilos globais
├── public/
├── angular.json
├── package.json
└── README.md
```

## 🧩 Fluxo Basico

    1. Usuario acessa a tela principal.
    2. Clica em "Nova tarefa" e preenche nome + descricao.
    3. Tarefa e salva na coluna To Do.
    4. Usuario arrasta cards entre colunas (To Do → Doing → Done).
    5. Pode editar nome/descricao ou adicionar comentarios via modal.
    6. Dados ficam persistidos no localStorage.

## 🧩 Funcionalidades

    ✅ Criar tarefas (nome + descricao)
    ✏️ Editar tarefas
    💬 Adicionar/remover comentarios
    🧲 Drag and drop entre colunas
    💾 Persistencia automatica via localStorage
    🗑️ Remover tarefas

## 🛠️ Como Rodar o Projeto Localmente


```bash
Siga os passos abaixo para rodar o projeto na sua maquina:

# Clonar o repositorio
git clone <URL_DO_REPOSITORIO>

# Entrar na pasta
cd project-go-task-angular-19

# Instalar dependencias
npm install

# Rodar o projeto
npm start

# Acessar: http://localhost:4200
```

## 🔗 Deploy 

![github](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)


## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/design/QTYZRzfhgB8gczKg3bQqVZ/GoTask--Community-?node-id=0-1&p=f&t=ln5yDEBFfO3Y43i1-0) É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## 💻 Sobre mim 😄
 Engenheiro de Software com foco em desenvolvimento front-end rumo ao full stack. Dedicado a criar experiências digitais inovadoras que impactam o mundo através da tecnologia.

## 🔗 Contato 

- [![linkedin](https://img.shields.io/badge/Linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jose-martinez-352032222/)
- [![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mailto:juniorjose1925@gmail.com)
- [![portfolio](https://img.shields.io/badge/Jose.Dev-0A0A03?style=for-the-badge&logo=react&logoColor=whit)](https://my-portfolio-jose-martinez.netlify.app/)
