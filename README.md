# ENS
ENS subgraph manifest for The Graph

Cloned from https://github.com/graphprotocol/adchain-subgraph

## Quick Start

This is taken from: https://github.com/graphprotocol/graph-node

### Prerequisites

To build and run this project you need
to have the following installed on your system:

- Rust (latest stable) - [How to install Rust](https://www.rust-lang.org/en-US/install.html)
- PostgreSQL – [PostgreSQL Downloads](https://www.postgresql.org/download/)
- IPFS – [Installing IPFS](https://ipfs.io/docs/install/)

For Ethereum network data you can either run a local node or use Infura.io:

- Local node – [Installing and running Ethereum node](https://ethereum.gitbooks.io/frontier-guide/content/getting_a_client.html)
- Infura infra – [Infura.io](https://infura.io/)

### Running a local Graph Node

1. Install IPFS and run `ipfs init` followed by `ipfs daemon`
2. Install PostgreSQL and run `initdb -D .postgres` followed by `createdb adchain-subgraph`
3. If using Ubuntu, you may need to install additional packages:
   - `sudo apt-get install -y clang libpq-dev libssl-dev pkg-config`
4. In repo root build it with `yarn; yarn build-ipfs --verbosity debug` and copy the IPFS hash for use in the step below
5. Clone https://github.com/graphprotocol/graph-node and run `cargo build`

Once you have all the dependencies set up you can run the following in `graph-node` project root:

```
cargo run -p graph-node --release -- \
  --postgres-url postgresql://USERNAME[:PASSWORD]@localhost:5432/adchain-subgraph \
  --ethereum-ws wss://mainnet.infura.io/_ws \
  --ipfs 127.0.0.1:5001 \
  --subgraph IPFS_HASH
```

Ensure you set `USERNAME` and `PASSWORD` correctly.

This will also spin up a GraphiQL interface at `http://127.0.0.1:8000/`.

### Command-line interface for graph-node

```
USAGE:
    graph-node
      --subgraph <IPFS_HASH>
      --ethereum-ipc <FILE>
        or --ethereum-rpc <URL>
        or --ethereum-ws <URL>
      --ipfs <HOST:PORT>
      --postgres-url <URL>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
        --subgraph <IPFS_HASH>       IPFS hash of the subgraph manifest
        --ethereum-ipc <FILE>        Ethereum IPC pipe
        --ethereum-rpc <URL>         Ethereum RPC endpoint
        --ethereum-ws <URL>          Ethereum WebSocket endpoint
        --ipfs <HOST:PORT>           HTTP address of an IPFS node
        --postgres-url <URL>         Location of the Postgres database used for storing entities
```

### Environment Variables

The Graph supports the following environment variables:

```
THEGRAPH_SENTRY_URL (optional) — Activates error reporting using Sentry
```
