# pet-love
Comandos do GitHub
Os Principais comandos do Github, um pequeno Guia para Iniciantes, como eu, rs.
O GitHub, plataforma de hospedagem de código fonte e colaboração em desenvolvimento de software, é amplamente utilizada por desenvolvedores do mundo inteiro, pois é uma ferramenta poderosa que oferece uma ampla variedade de recursos e funcionalidades.

Já o sistema Git, sistema de controle de versão, facilita o trabalho em equipe e o gerenciamento de projetos de software, se tornando uma parte essencial em muitas empresas porque é um sistema de controle de versão distribuído, sendo amplamente utilizado e integrado ao GitHub.

Vamos explorar os principais comandos do GitHub que são essenciais para iniciantes.

git clone

Este comando é usado para criar uma cópia local de um repositório remoto do GitHub para o seu computador, o primeiro passo para começar a trabalhar em um projeto. O comando é executado da seguinte forma:

git clone <URL do repositório>
ex.: git clone https://github.com/dio_repositorio.git

git add

Este comando é usado para adicionar mudanças em arquivos ao próximo "commit", e permite que você especifique quais arquivos devem ser incluídos na próxima versão do projeto. O comando é:

git add <nome do arquivo>  # Adicionar um arquivo específico
git add .  # Adicionar todos os arquivos modificados
ex.: git add README.md

git commit

Este comando é usado para criar um novo commit, que é uma nova versão do projeto com as mudanças adicionadas com o comando git add. É sempre muito importante adicionar uma mensagem de commit descritiva para explicar as mudanças feitas e auxiliar a quem esta lendo o código. O comando é:

git commit -m "Mensagem do commit"
ex.: git commit -m "Mudando o Readme.md - Teste conexao"

git pull

Comando usado para obter as últimas mudanças do repositório remoto para a sua cópia local do projeto. É importante executar esse comando regularmente ou sempre que deseja manter sua cópia local atualizada com as mudanças feitas por outros programadores da equipe. O comando é:

git pull
ex.: git pull

git push

Comando muito usado, envia suas mudanças locais para o repositório remoto no GitHub. Depois de fazer mudanças e criar commits locais, você precisa enviá-los para o repositório remoto para compartilhá-los com outros da equipe. O comando é:

git push origin <nome da branch>
ex.: git push origin main

git branch

Comando usado para criar, listar e gerenciar branches, que são as ramificações de desenvolvimento do projeto, ou seja, Branches são ramos usados para separar diferentes fluxos de trabalho e facilitar o trabalho em equipe. O comando é:

git branch  # Listar todas as branches
git branch <nome da branch>  # Criar uma nova branch
git branch -d <nome da branch>  # Deletar uma branch
git checkout <nome da branch>  # Mudar para uma branch específica
ex.: git branch minhaBranch

git merge

Comando usado para combinar as mudanças de uma branch em outra, sendo muito útil quando você deseja mesclar o trabalho de diferentes branches em uma única versão do projeto. O comando é:

git merge <nome da branch>
ex.: git merge main
