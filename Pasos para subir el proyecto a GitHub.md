# 1. Inicializar git en tu carpeta
````bash
  git init
````

# 2. Configurar el user en el git
## Verificar que esta configurado
### Si esta configurado debe imprimir el nombre y el correo
````bash
  git config --global --list
````

## Si NO esta configurado agregar la configuracion
````bash
git config --global user.name "nombre de usuario"
git config --global user.email "useremail@email.com"
````

# 3. Conectar tu proyecto con el repo de GitHub
Crear el repo en GitHub

## Verificar que existe el repo 
````bash
git remote -v
````
## Si existe y lo quieres borrar
````bash
git remote remove origin
````
## Conectá el repo con GitHub
````bash
git remote add origin https://github.com/MariaElena86/demoquestions.git
````

# 4.Verificar si esta creada la rama en el repositorio

## Verificar si hay ramas existentes
````bash
git status
git branch
````
## Asegurate de que la rama se llame main
````bash
git branch -M main
````

# 5.Agregar todos los archivos al "stage"
````bash
git add .
````
# 6.Hacer el primer commit 
````bash
git commit -m "Primer commit"
````

# 7.Subir los archivos
````bash
git push -u origin main
````
