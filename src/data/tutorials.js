

const estoriomTutorials = [
    {
        id: "ajouter-produit",
        title: "Ajouter un produit",
        file: "Ajouter-un-produit.html",
        category: "Produits",
        steps: ["Menu Produits", "Ajouter un produit", "Saisir SKU et Nom", "Gérer le stock", "Sauvegarder"]
    },
    {
        id: "creer-combo",
        title: "Créer un combo de produits",
        file: "créer-un-combo.html",
        category: "Produits",
        steps: ["Ajouter un produit", "Type : Combo", "Rechercher SKU", "Définir marge", "Sauvegarder"]
    },
    {
        id: "variations-produit",
        title: "Gérer les variations (Tailles/Couleurs)",
        file: "variations.html",
        category: "Produits",
        steps: ["Produits > Variations", "Ajouter type", "Produit > Type Variable", "Remplir prix/stock"]
    },
    {
        id: "unites-produit",
        title: "Ajouter différentes unités (kg, cm...)",
        file: "ajouter_différentes_unite_de_produits.html",
        category: "Produits",
        steps: ["Produits > Unités", "Nouvelle unité", "Attribuer au produit", "Sauvegarder"]
    },
    {
        id: "groupes-prix",
        title: "Ajouter des groupes de prix",
        file: "Ajouter_groupe_de_prix.html",
        category: "Produits",
        steps: ["Produits > Groupe de prix", "Nommer le groupe", "Appliquer aux produits"]
    },

    {
        id: "creer-vente-pos",
        title: "Créer une vente (POS)",
        file: "Créer-une-vente.html",
        category: "Ventes",
        steps: ["Ventes > POS", "Sélectionner client", "Ajouter produits", "Paiement", "Finaliser"]
    },
    {
        id: "vente-standard",
        title: "Créer une vente standard",
        file: "créer_une_vente.html",
        category: "Ventes",
        steps: ["Ventes > Ajouter", "Infos client", "Prix par défaut", "Enregistrer"]
    },
    {
        id: "vente-credit",
        title: "Effectuer une vente à crédit",
        file: "ventes_à_credit.html",
        category: "Ventes",
        steps: ["POS", "Ajouter au panier", "Bouton 'Vente à crédit'", "Validation"]
    },
    {
        id: "ajouter-client-pos",
        title: "Ajouter client depuis le POS",
        file: "ajouter_client_depuis_POS.html",
        category: "Ventes",
        steps: ["POS", "Bouton (+)", "Saisir coordonnées", "Sauvegarder"]
    },
    {
        id: "reduction-pos",
        title: "Réduction sur écran POS",
        file: "utiliser_reduction_dans_pos.html",
        category: "Ventes",
        steps: ["POS", "Cliquer produit", "Bouton 'Remise'", "Mettre à jour"]
    },
    {
        id: "livraison-pos",
        title: "Ajouter livraison depuis le POS",
        file: "ajouter_livraison_depuis_POS.html",
        category: "Ventes",
        steps: ["POS", "Section encadrée", "Options livraison", "Valider"]
    },
    {
        id: "taxe-vente",
        title: "Appliquer une taxe en caisse",
        file: "Appliquer_une_taxe_lors_dune_vente.html",
        category: "Ventes",
        steps: ["POS", "Cadre taxes", "Sélectionner taxe", "Mettre à jour"]
    },

    {
        id: "ajouter-client",
        title: "Ajouter un client",
        file: "ajouter_un_client.html",
        category: "Contacts",
        steps: ["Contacts > Clients", "Nouveau client", "Infos essentielles", "Sauvegarder"]
    },
    {
        id: "groupe-clients",
        title: "Créer un groupe de clients",
        file: "creer_groupe_de_clients.html",
        category: "Contacts",
        steps: ["Contacts > Groupe de clients", "Ajouter (VIP/Gros)", "Assigner aux clients"]
    },
    {
        id: "gerer-fournisseurs",
        title: "Gérer les fournisseurs",
        file: "gerer_fournisseurs.html",
        category: "Contacts",
        steps: ["Contacts > Fournisseurs", "Ajouter", "Coordonnées", "Enregistrer"]
    },

    {
        id: "ajouter-achat",
        title: "Ajouter un achat",
        file: "Ajouter_un_achat.html",
        category: "Achats",
        steps: ["Achats", "Fournisseur", "Lieu d'affaires", "Produits", "Sauvegarder"]
    },
    {
        id: "gerer-depenses",
        title: "Gérer les dépenses",
        file: "gérer_dépenses.html",
        category: "Dépenses",
        steps: ["Dépenses > Catégories", "Ajouter dépense", "Ajouter paiement", "Consulter liste"]
    },
    {
        id: "comptes-paiement",
        title: "Lier des comptes de paiement",
        file: "ajouter_lier_compte_paiement.html",
        category: "Finances",
        steps: ["Comptes de paiement", "Nouveau compte", "Vente > Sélectionner compte", "Lier"]
    },
    {
        id: "consulter-paiements",
        title: "Consulter paiements précédents",
        file: "consulter_paiement_ventes_predentes.html",
        category: "Finances",
        steps: ["Ventes > POS", "Détails caisse", "Imprimer détails"]
    },

    {
        id: "config-entreprise",
        title: "Configuration initiale entreprise",
        file: "configuration_initial_entreprise.html",
        category: "Paramètres",
        steps: ["Paramètres entreprise", "Nom/Devise", "Créer taxe", "Mettre à jour"]
    },
    {
        id: "config-taxe",
        title: "Configurer une taxe",
        file: "configurer_une_taxe.html",
        category: "Paramètres",
        steps: ["Paramètres > Taux d'importation", "Nommer", "Pourcentage", "Sauvegarder"]
    },
    {
        id: "config-notifications",
        title: "Configurer les notifications",
        file: "configurer_notification.html",
        category: "Paramètres",
        steps: ["Modèles notification", "Utiliser tags {name}", "Enregistrer"]
    },
    {
        id: "config-services",
        title: "Configurer types de services",
        file: "configurer_types_servives.html",
        category: "Paramètres",
        steps: ["Paramètres > Services", "Ajouter", "Nommer (ex: Livraison)", "Tarif"]
    },
    {
        id: "config-boutique",
        title: "Configurer Boutique en ligne",
        file: "configurer-une-boutique-enligne.html",
        category: "Paramètres",
        steps: ["Online Shop", "Nom boutique", "Logo", "Mettre à jour"]
    },

    {
        id: "ajouter-devis",
        title: "Ajouter un devis",
        file: "Ajouter_un_devis.html",
        category: "Ventes",
        steps: ["Ventes > Devis", "Client", "Produits", "Imprimer"]
    },
    {
        id: "gerer-transferts",
        title: "Gérer les transferts de stock",
        file: "gerer_transferts.html",
        category: "Stocks",
        steps: ["Transferts de stock", "Origine/Destination", "Quantités", "Frais"]
    },
    {
        id: "consulter-rapports",
        title: "Consulter les rapports",
        file: "consulter_rapports.html",
        category: "Rapports",
        steps: ["Section Rapports", "Profits/Pertes", "Exporter CSV/PDF"]
    },
    {
        id: "reduction-standard",
        title: "Créer une réduction standard",
        file: "créer_reduction_standard.html",
        category: "Ventes",
        steps: ["Ventes > Réductions", "Nouvelle remise", "Définir priorité", "Sauvegarder"]
    }
];

export default estoriomTutorials;