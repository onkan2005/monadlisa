graph TD
    A([Start: Identity Lifecycle]) --> B;

    subgraph Identity Management
    B[Identity Creation/Registration\n- Attribute Proofing\n- Credential Issuance\n- Identity Formation] --> C;
    C[Provisioning\n- Role-based access\n- Source code repos\n- CI/CD tools, servers] --> D;
    D[Authentication & Access\n- Multi-factor login\n- Trusted communication\n- Single Sign-On] --> E;
    E[Modification/Maintenance\n- Update attributes\n- Role changes\n- Credential rotation] --> F;
    end

    F[De-provisioning/Termination\n- Revoke credentials\n- Disable accounts\n- Remove access] --> G;

    G([End: Identity Lifecycle Terminated]);
