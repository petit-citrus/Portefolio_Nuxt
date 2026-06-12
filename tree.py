import os

def create_tree(dir_path, prefix=""):
    # Dossiers volumineux ou système à ignorer pour garder le fichier clean
    ignore_list = {'.git', 'vendor', 'var', 'node_modules', '__pycache__', '.idea', '.vscode', '.nuxt', '.github'}

    try:
        items = sorted(os.listdir(dir_path))
    except PermissionError:
        return []

    # Filtrer les éléments à ignorer
    items = [item for item in items if item not in ignore_list]

    lines = []
    for i, item in enumerate(items):
        full_path = os.path.join(dir_path, item)
        is_last = (i == len(items) - 1)

        # Détermination du symbole graphique
        connector = "└── " if is_last else "├── "
        lines.append(f"{prefix}{connector}{item}")

        # Si c'est un dossier, on descend récursivement dedans
        if os.path.isdir(full_path):
            next_prefix = prefix + ("    " if is_last else "│   ")
            lines.extend(create_tree(full_path, next_prefix))

    return lines

def main():
    output_filename = "arboresence.md"
    print("Génération de l'arborescence en cours...")

    tree_lines = create_tree(".")

    with open(output_filename, "w", encoding="utf-8") as f:
        f.write("# Arborescence du Projet\n\n")
        f.write("```text\n")
        f.write(".\n")
        for line in tree_lines:
            f.write(f"{line}\n")
        f.write("```\n")

    print(f"Fichier '{output_filename}' généré avec succès dans le dossier courant !")

if __name__ == "__main__":
    main()