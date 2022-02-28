import { ProtoService } from './build'

async function listProtos () {
  const protos = await ProtoService.listProtos({
    page: 0,
  })

  console.log(protos)
}

listProtos().then(() => {

})