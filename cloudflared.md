

````markdown
# Connexion React ↔ Django local via Cloudflare Tunnel

## 1️⃣ Installer Cloudflared
- Télécharger et installer `cloudflared` sur ton PC :
```powershell
winget install --id Cloudflare.cloudflared
````

* Vérifier l'installation :

```powershell
cloudflared --version
```

---

## 2️⃣ Créer et configurer le tunnel Cloudflare

### a) Login

```powershell
cloudflared tunnel login
```

* Autorise Cloudflare via le navigateur.
* Si le certificat `cert.pem` ne s’écrit pas automatiquement, place-le dans :

```
C:\Users\<username>\.cloudflared\cert.pem
```

### b) Créer un tunnel nommé

```powershell
cloudflared tunnel create digiscia
```

### c) Lancer le tunnel vers ton Django local

```powershell
cloudflared tunnel --url http://localhost:8000
```

* Cloudflare génère une URL publique, par exemple :

```
https://digiscia.trycloudflare.com
```

---

## 3️⃣ Configurer Django

### a) ALLOWED_HOSTS

Dans `settings.py`, ajouter l’URL du tunnel :

```python
ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    "digiscia.trycloudflare.com",
]
```

### b) Activer CORS pour React

Installer le package :

```bash
pip install django-cors-headers
```

Ajouter dans `settings.py` :

```python
INSTALLED_APPS = [
    ...,
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...,
]

CORS_ALLOWED_ORIGINS = [
    "https://monapp.pages.dev",  # URL du front React
]
```

---

## 4️⃣ Lancer Django

```bash
python manage.py runserver
```

* Vérifier que ton API répond sur `http://localhost:8000`.

---

## 5️⃣ Configurer React pour utiliser l’API

Dans ton front-end React, faire les appels API vers l’URL publique du tunnel :

```javascript
fetch("https://digiscia.trycloudflare.com/api/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

> ⚠️ Ne pas utiliser `localhost` depuis React hébergé sur Cloudflare Pages.

---

## 6️⃣ Vérifications finales

* Tunnel Cloudflare actif et accessible
* Django accepte le `HTTP_HOST` du tunnel
* CORS autorise les requêtes depuis React
* Front-end fait ses appels vers l’URL publique du tunnel

---

💡 **Astuce** : Pour un tunnel stable et permanent, configure un fichier `config.yml` pour gérer le tunnel nommé avec hostnames et services supplémentaires.

```
`
