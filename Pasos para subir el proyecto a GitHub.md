# 1. Inicializar git en tu carpeta
````bash
git init
````

# 2. Configurar el user en el git
# Verificar que esta configurado
Si esta configurado debe imprimir el nombre y el correo
````bash
git config --global --list
````

# Si NO esta configurado agregar la configuracion
````bash
git config --global user.name "nombre de usuario"
git config --global user.email "useremail@email.com"
````

# Verificar si hay ramas existentes
````bash
git branch
````

# 3. Agregar todos los archivos al "stage"
````bash
git add .
````
# 4. Hacer el primer commit 
````bash
git commit -m "Primer commit"
````

# 5. Conectar tu proyecto con el repo de GitHub
Crear el repo en GitHub

# Verificar si esta creada la rama en el repositorio
````bash
git status
git branch
````
# Asegurate de que la rama se llame main
````bash
git branch -M main
````
# Verificar que existe el repo 
````bash
git remote -v
````

# Conectá el repo con GitHub
````bash
git remote add origin https://github.com/MariaElena86/demoquestions.git
````

# 6. Subir los archivos
````bash
git push -u origin main
````