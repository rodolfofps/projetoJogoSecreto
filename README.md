# Criando um Repositório no GitHub

Este repositório contém as etapas e comandos necessários para criar e configurar um repositório no GitHub a partir do zero, utilizando o Git no terminal. Se você é iniciante assim como também sou pode aprender como fazer isso de maneira simples, este guia é para você!

## 🚀 Passos para Criar e Subir um Repositório

### 1. **Crie um Repositório no GitHub**

- Vá até [GitHub](https://github.com) e faça login na sua conta.
- Clique no ícone de "+" no canto superior direito e selecione **"New repository"**.
- Escolha um nome para o repositório, uma descrição (opcional) e defina se será público ou privado.
- Clique em **"Create repository"**.

### 2. **Inicialize um Repositório Local**

No seu terminal (ou Git Bash), navegue até a pasta onde deseja criar o repositório e execute:
```bash
git init
```

### 3. **Adicione Arquivos ao Repositório Local**
Nessa etapa, será feita a adição de todos os arquivos presentes no diretório local 
```bash
git add . 
```

### 4. **Faça o Primeiro Commit**
Agora que você adicionou os arquivos, é hora de registrar as alterações com um commit: 
```bash
git commit -m "Nome_commit" 
```

### IMPORTANTE. **Caso haja necessidade, será necessário realizar a autenticação:**
```bash
git config --global user.email "User_mail"
git config --global user.name "User_name"
```
### 5. **Criando a branch**
Com o seguinte código é possível criar uma branch:
```bash
git branch -M main
```
### 6. **Conecte o Repositório Local ao Repositório no GitHub**
Para conectar seu repositório local ao repositório remoto no GitHub, execute o comando abaixo (substitua o URL pelo link do seu repositório):
```bash
git remote add origin https://github.com/SEUNOME/SEUREPOSITORIO.git
```
### 7. **Envie os Arquivos para o GitHub**
Agora que está tudo configurado, envie seu commit para o repositório no GitHub com o comando:
```bash
git push -u origin main
```
## 🚀 Tecnologias 
<div>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</div>





