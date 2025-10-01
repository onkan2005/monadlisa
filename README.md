```mermaid
graph TD
    A([Start: Identity Lifecycle]) --> B;

    subgraph Identity Management
        B[Identity Creation/Registration\n- Attribute Proofing\n- Credential Issuance\n- Identity Formation] --> C;
        C[Provisioning\n- Role-based access\n- Source code repos\n- CI/CD tools, servers] --> D;
        D[Authentication & Access\n- Multi-factor login\n- Trusted communication\n- Single Sign-On] --> E{Identity Active?};
    end

    E -- Yes, requires update --> F[Modification/Maintenance\n- Update attributes\n- Role changes\n- Credential rotation];
    F --> D; 

    E -- No, termination needed --> G[De-provisioning/Termination\n- Revoke credentials\n- Disable accounts\n- Remove access];

    G --> H([End: Identity Lifecycle Terminated]);
